<script lang="ts">
    import { Card } from "flowbite-svelte";
    import type { Comment } from "../types";
    import { onMount } from "svelte";
    interface CommentProps {
        comment: Comment,
        observer: IntersectionObserver | undefined
        index: number
    }

    let {comment, observer, index} : CommentProps = $props();
    let dom : Element; // ComponentだとElementになってくれず、clientHeightとれないっぽい

    onMount(async () => {
        observer?.observe(dom);
    });
</script>
<div data-comment-index={index} bind:this={dom}>
    <Card class="my-1">
        <div class="flex justify-between">
            <div class="font-bold">{comment.name}</div>
            <div>{comment.date.toLocaleString()}</div>
        </div>
        <div class="my-1">
            {@html comment.content}
        </div>
        <div>{comment.duration} seconds</div>
    </Card>
</div>