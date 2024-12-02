<script lang="ts">
    import { Button, Modal, Fileupload, Label, Textarea } from 'flowbite-svelte';
    import type { Comment } from '../types';
    interface TrayProps{
        comments: Comment[],
        audioSrc: string,
        audioPaused: boolean
    }
    let {comments = $bindable(), audioSrc = $bindable(), audioPaused = $bindable()}: TrayProps = $props();
    let defaultModal :boolean = $state(true);
    let commentText : string = $state("");
    let files : FileList | undefined =$state(undefined);
    const onSubmit = () => {
        const file = files?.item(0);
        if (file && !file.type.match('audio.*')) {
            alert("音声ファイルを選択してください。");
            return;
        }
        const reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
        }
        reader.onload = () => {
            audioPaused = true;
            if(typeof(reader.result) == "string"){
                audioSrc = reader.result;
            }
        };
        comments = [];
        const splitedComments = commentText.split("\n");
        const tmpComments : Comment[] = [];
        let name = "";
        let date = new Date();
        let contentArray: string[] = [];
        splitedComments.forEach((splitedComment, index, arr)=>{
            /** 
             * スレ主によるコメントは
             * 名前
             * スレ主
             * - 2024/12/06 00:00
             * となる
             * そのほかは
             * 名前 - 2024/12/06 00:00
             * この文字列を発見するしかコメントの切れ目を判断する手段がなさそう
             * */
            const dateIndex = splitedComment.search(/— [0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]/);
            // 最後のコメントのとき文字列発見できないからしょうがない
            if(dateIndex == -1 || index == arr.length - 1){
                contentArray.push(splitedComment);   
                return;
            }
            let newName = splitedComment.slice(0, dateIndex - 1);
            const newDate = new Date(splitedComment.slice(dateIndex));
            if(contentArray.length){
                // ↓許しがたい
                if(contentArray[contentArray.length - 1] == "スレ主" || contentArray[contentArray.length - 1] == "アプリ"){
                    newName = contentArray[contentArray.length - 2];
                    contentArray.splice(contentArray.length - 2, 2);
                }
                const content = contentArray.join("<br>");
                tmpComments.push({
                    id: index,
                    name: name,
                    date: date,
                    content: content,
                    duration: 0,
                });
            }
            name = newName;
            date = newDate;
            contentArray = [];
        });
        tmpComments.forEach((comment, index, arr) => {
            const sameDate = tmpComments.filter((element) => comment.date.getTime() == element.date.getTime());
            sameDate.sort((a,b)=>a.id-b.id);
            let duration = 60 / sameDate.length;
            if(index == tmpComments.length - 1){
                duration = 0;
            }else if(sameDate.length <= 1){
                const next = tmpComments[index + 1];
                duration = (next.date.getTime() - comment.date.getTime()) / 1000;
            }
            comment['duration'] = duration;
            comments.push(comment);
        });
    }
</script>
    <Button class="shadow-lg" on:click={() => (defaultModal = true)}>読込</Button>
    <Modal title="読み込み" bind:open={defaultModal} autoclose>
        <Label class="mb-2" for="audio">録音ファイル</Label>
        <Fileupload bind:files={files} class="my-2" id="audio" accept=".mp3,.m4a,.aac,.wav,.flac"></Fileupload>
        <Label class="my-2" for="comments">コメントを以下に貼付</Label>
        <Textarea bind:value={commentText} class="mb-2" rows={10} id="comments"></Textarea>
        <div class="flex justify-content-end">
            <Button on:click={onSubmit} class="mt-2">読込</Button>
        </div>
    </Modal>