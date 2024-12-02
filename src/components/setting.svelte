<script lang="ts">
    import { Button, Modal, Label, Range, Tooltip } from 'flowbite-svelte';
    let defaultModal : boolean = $state(false);
    let mainVolume : number = $state(0);
    let time : number = $state(0);
    let isPlaying = $state(false);
    let playingIcon : string = $state("▶");
    const onTogglePlay = () => {
        isPlaying = !isPlaying;
        if(isPlaying) {
            playingIcon = "■";
            return;
        }
        playingIcon = "▶";
    }
</script>
    <Button class="shadow-lg" on:click={() => (defaultModal = true)}>設定</Button>
    <Modal title="設定" bind:open={defaultModal}>
        <Label for="main-volume">音声音量:{mainVolume}</Label>
        <Range id="main-volume" bind:value={mainVolume} />
        <Label for="time">音声再生位置</Label>
        <div class="flex items-center gap-2">
            <Button on:click={onTogglePlay} class="h-2 !p-3 rounded-sm focus:ring-0">{playingIcon}</Button>
            <Range id="time" bind:value={time} />
        </div>
        
    </Modal>