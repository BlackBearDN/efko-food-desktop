import React from 'react';
import {observer} from "mobx-react-lite";

import './style.scss';

import {Context} from "../../index";

const InfoMessagePopup = observer(() => {
  const {store} = React.useContext(Context)

  return (
    <div className={
      store.exceptionsStore.infoType === 'error' ?
        'infoMessagePopupRed'
        :
        'infoMessagePopupBlue'
    }>
      {
        store.exceptionsStore.showedInfoMessage &&
        store.exceptionsStore.infoMessage
      }
    </div>
  );
});

export default InfoMessagePopup;
