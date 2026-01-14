export interface OptionVote{
    optionText: string;
    voteCount: number;
}
export interface Vote {
    id: number;
    question: string;
    options: OptionVote[];
}
