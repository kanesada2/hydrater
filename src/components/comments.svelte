<script lang="ts">
    import { onMount } from "svelte";
    import type { Comment as CommentType } from "../types";
    import Comment from "./comment.svelte";
    import { Button, Checkbox, Label, Range } from "flowbite-svelte";

    interface CommentsProps {
        comments: CommentType[],
        audioDuration: number,
        audioTime: number,
        audioPaused: boolean
    }

    let {comments, audioDuration = $bindable(), audioTime = $bindable(), audioPaused = $bindable()}: CommentsProps = $props();
    let dom:Element;
    let observer: IntersectionObserver | undefined = $state();

    let time : number = $state(0);
    // TODO コンポーネント
    let audioPlayingIcon : string = $state("▶");
    let scrollingIcon : string = $state("■");
    let isScrolling: boolean = $state(true);
    let isNarrating: boolean = $state(false);
    const onToggleAudio = () => {
        audioPaused = !audioPaused;
        if(audioPaused) {
            audioPlayingIcon = "▶";
            return;
        }
        audioPlayingIcon = "■";
    }
    const onToggleScroll = () =>{
        isScrolling = !isScrolling;
        if(isScrolling){
            scrollingIcon = "■";
            return;
        }
        scrollingIcon = "▶";
    }


    onMount(async ()=>{
        const options: IntersectionObserverInit = {
            root:dom,
            rootMargin: '-1% 0% -99% 0%',
            threshold: 0
        };
        let interval: number | undefined;
        let scrollTop = 0;
        observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    if(interval !== undefined){
                        clearInterval(interval);
                    }
                    const commentIndex = (entry.target as HTMLElement).dataset.commentIndex;
                    if(commentIndex === undefined){
                        return;
                    }
                    const comment = comments[Number(commentIndex)];

                    if(isNarrating){
                        const narration = comment.content.replaceAll("<br>", "");
                        const uttr = new SpeechSynthesisUtterance(narration);
                        uttr.volume = 0.3;
                        speechSynthesis.cancel();
                        speechSynthesis.speak(uttr);
                    }

                    let tick = 100;
                    let scrollDelta = entry.boundingClientRect.height / (comment.duration * 1000 / tick);
                    if(scrollDelta < 1){
                        tick = Math.floor(tick / scrollDelta);
                        scrollDelta = 1;
                    }
                    interval = setInterval(() => {
                        if(!isScrolling){
                            return;
                        }
                        dom.scrollBy(0, scrollDelta);
                        if(scrollTop == dom.scrollTop){
                            clearInterval(interval);
                        }
                        scrollTop = dom.scrollTop;
                    }, tick);
                }
            });
        }, options);
    });
</script>
<div class="flex justify-center">
    <div class="flex justify-between gap-1 w-full max-w-sm">
        <div class="flex items-center bg-gray-200 dark:bg-gray-700">
                <Button on:click={onToggleAudio} class="h-2 !p-3 rounded-sm focus:ring-0">{audioPlayingIcon}</Button>
                <Range id="time" min="0" max={audioDuration} bind:value={audioTime} />
        </div>
        <Label class="flex items-center">読上:<Checkbox bind:checked={isNarrating} class="mx-1" /></Label>
        <Button on:click={onToggleScroll} class="h-2 !p-3 rounded-sm focus:ring-0">{scrollingIcon}</Button>
    </div>
</div>

<div bind:this={dom} class="flex justify-center overflow-scroll h-screen w-full">
    <div>
        {#each comments as comment, i}
        <Comment index={i} comment={comment} observer={observer} />
    {/each}
    </div>
</div>