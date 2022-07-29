export type EmojiType = {
  symbol: string;
  name: string;
  keywords: string;
}[];

export interface BoxemojiProps{
  BoxEmoji: boolean,
  inputRef: React.RefObject<HTMLInputElement>

}
