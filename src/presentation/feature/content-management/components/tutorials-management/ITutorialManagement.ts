export interface TutorialCardProps {
  tutorial: {
    id: number | string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    type: string;
    description: string;
  };
}