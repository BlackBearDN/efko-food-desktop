import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";

import './style.scss';

import { Context } from "../../index";

interface IDashCardProps {
  _id: string,
  name: string,
  photoUrl?: string
}

const DashCard: FC<IDashCardProps> = observer(({_id, name, photoUrl}) => {
  const {store} = useContext(Context)

  return (
    <button onClick={() => store.dashesStore.getDashById(_id)} className={'dashCard'}>
      {
        photoUrl && <img src={photoUrl} alt={name} />
      }
      <p>{name}</p>
    </button>
  );
});

export default DashCard;
