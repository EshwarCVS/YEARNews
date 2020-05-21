import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import LinkList from "../../components/Link/LinkList";
import SmallHeader from "../../components/Header/SmallHeader";
import LargeHeader from "../../components/Header/LargeHeader";

const News = (props) => {
  return (
    <IonPage>
      <SmallHeader title="YEARNews" />
      <IonContent>
        <LargeHeader title="YearNews" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default News;