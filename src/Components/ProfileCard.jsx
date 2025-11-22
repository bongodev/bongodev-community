import { profileCardData } from '../Data';
import { CreateCard } from './CreateCard';

export function ProfileCard() {
  return (
    <div className="flex gap-6 flex-wrap justify-center p-4">
      {profileCardData.map((card) => (
        <CreateCard key={card.name} cardData={card} />
      ))}
    </div>
  );
}
