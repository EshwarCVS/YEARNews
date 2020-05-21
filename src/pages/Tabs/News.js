import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargdeHeader";
const News = () => {
  return (
    <IonPage>
      <SmallHeader title="YEARNews" />
      <IonContent fullscreen>
        <LargeHeader title="YEARNews" />
      </IonContent>
    </IonPage>
  );
};

export default News;
