<script lang="ts">
    import Comments from "../components/comments.svelte";
    import Setting from "../components/setting.svelte";
    import Tray from "../components/tray.svelte";
    import type { Comment } from "../types";

    let comments: Comment[] = $state([]);
    let audioSrc: string = $state("");
    let audioDuration: number = $state(0);
    let audioPaused: boolean = $state(true);
    let audioTime:number = $state(0);
</script>
<audio src={audioSrc} bind:duration={audioDuration} bind:currentTime={audioTime} bind:paused={audioPaused}></audio>
<Comments bind:audioDuration={audioDuration} bind:audioTime={audioTime} bind:audioPaused={audioPaused} comments={comments} />
<div class="fixed bottom-4 right-4">
    <Tray bind:comments={comments} bind:audioSrc={audioSrc} bind:audioPaused ={audioPaused} />
</div>
