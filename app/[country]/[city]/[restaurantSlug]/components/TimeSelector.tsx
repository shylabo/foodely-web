'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const deliveryTimes = [
  {
    label: '12:00 PM - 12:30 PM',
  },
  {
    label: '12:30 PM - 1:00 PM',
  },
  {
    label: '1:00 PM - 1:30 PM',
  },
  {
    label: '1:30 PM - 2:00 PM',
  },
  {
    label: '2:00 PM - 2:30 PM',
  },
  {
    label: '2:30 PM - 3:00 PM',
  },
  {
    label: '3:00 PM - 3:30 PM',
  },
  {
    label: '3:30 PM - 4:00 PM',
  },
  {
    label: '4:00 PM - 4:30 PM',
  },
  {
    label: '4:30 PM - 5:00 PM',
  },
  {
    label: '5:00 PM - 5:30 PM',
  },
  {
    label: '5:30 PM - 6:00 PM',
  },
  {
    label: '6:00 PM - 6:30 PM',
  },
  {
    label: '6:30 PM - 7:00 PM',
  },
  {
    label: '7:00 PM - 7:30 PM',
  },
  {
    label: '7:30 PM - 8:00 PM',
  },
];

const TimeSelector: React.FC = () => {
  console.log(new Date());
  return (
    <Select>
      {' '}
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select date" />
      </SelectTrigger>
      <SelectContent>
        {deliveryTimes.map((item: { label: string }) => (
          <SelectItem key={item.label} value={item.label}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelector;
