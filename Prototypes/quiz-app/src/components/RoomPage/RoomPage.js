import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import RoomFormPage from '../RoomFormPage/RoomFormPage';
import RoomQuestionsPage from '../RoomQuestionsPage/RoomQuestionsPage';

export default function RoomPage() {
  const isDocent = useSelector((state) => state.isDocent);
  const { id } = useParams();

  return (
    <div>
      {isDocent ? <RoomFormPage roomId={id} /> : <RoomQuestionsPage roomId={id} />}
    </div>
  );
}
