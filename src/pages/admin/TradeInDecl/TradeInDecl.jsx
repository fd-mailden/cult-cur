import React, { useState, useEffect } from "react";
import { Loading } from "../../../components/UI/Loader/Loading";
import { DeclarationsWrapper } from "../../../components/UI/DeclarationsWrapper/DeclarationsWrapper";
import { AdminWrapper } from "../../../components/UI/AdminWrapper/AdminWrapper";
import { TradeInDropDown } from "../../../components/admin/TraideInDropDown/TradeInDropDown";
import { CountManager } from "../../../components/admin/CountManager/CountManager";
import { SearchOfNumber } from "../../../components/admin/SearchOfNumber/SearchOfNumber";
import { Select } from "../../../components/UI/Select/Select";
import { DeclarationTable } from "../../../components/admin/DeclarationTable/DeclarationTable";
import { useTradeInDecl } from "./useTradeInDecl";
import { EventBus, DECLARATION_WINDOW } from "../../../utils/event-bus";
import { DeclarationWindow } from "../../../components/admin/DeclarationWindow/DeclarationWindow";
import { TradeInWindow } from "../../../components/admin/DeclarationWindow/TradeInWindow/TradeInWindow";
const selectData = {
  name: "All",
  data: ["All", "Approved", "Denied"],
  field: "approved",
};

function TradeInDecl() {
  const {
    models: { declarations, isLoading, empty },
    commands: searchHandler,
    selectHandler,
    setPhone,
  } = useTradeInDecl("trade-in_declaration");
  const [isOpenWindow, onOpenWindow] = useState(false);
  const [initialDeclaration, setInitialDeclaration] = useState(null);
  const handelOpenWindow = (e) => {
    setInitialDeclaration(e);
    onOpenWindow(true);
  };

  useEffect(() => {
    EventBus.on(DECLARATION_WINDOW.open, handelOpenWindow);
    return () => {
      EventBus.off(DECLARATION_WINDOW.open, handelOpenWindow);
    };
  }, []);

  return (
    <AdminWrapper>
      {isLoading ? (
        <Loading height="30" />
      ) : (
        <DeclarationsWrapper>
          <CountManager declarations={declarations} />
          <SearchOfNumber
            onSubmit={searchHandler}
            setPhone={setPhone}
            empty={empty}
          />
          <Select
            mode="--white"
            selectData={selectData}
            setDataField={selectHandler}
          />
          <DeclarationTable
            declarations={declarations}
            collectionName={"trade-in_declaration"}
          />
        </DeclarationsWrapper>
      )}
      <DeclarationWindow
        onShow={() => onOpenWindow(false)}
        isOpen={isOpenWindow}
      >
        <TradeInWindow
          declaration={initialDeclaration}
          collectionName="trade-in_declaration"
        />
      </DeclarationWindow>
    </AdminWrapper>
  );
}

export { TradeInDecl };
