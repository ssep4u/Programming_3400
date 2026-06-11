import { useState } from 'react';

export default function DateComponent() {
  const [today] = useState(new Date());

  return (
    <>
      <h3>오늘 날짜</h3>
      <p>
        {today.getFullYear()}년
        {today.getMonth() + 1}월
        {today.getDate()}일
      </p>
    </>
  );
}