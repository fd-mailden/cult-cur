import React, { useState, useEffect } from "react";
import { useGetDeclarations } from "../../../hooks/useGetDeclarations";
import { Loading } from "../../../components/UI/Loader/Loading";
import { DeclarationsWrapper } from "../../../components/UI/DeclarationsWrapper/DeclarationsWrapper";
import { AdminWrapper } from "../../../components/UI/AdminWrapper/AdminWrapper";
import { TradeInDropDown } from "../../../components/admin/TraideInDropDown/TradeInDropDown";
import { CountManager } from "../../../components/admin/CountManager/CountManager";
import { SearchOfNumber } from "../../../components/admin/SearchOfNumber/SearchOfNumber";
import { Select } from "../../../components/UI/Select/Select";
import { DeclarationTable } from "../../../components/admin/DeclarationTable/DeclarationTable";
import { useTradeInDecl } from "../TradeInDecl/useTradeInDecl";
import { EventBus } from "../../../utils/event-bus";

const selectData = {
  name: "All",
  data: ["All", "Approved", "Denied"],
  field: "approved",
};
function TestDriveDecl() {
  const {
    models: { declarations, isLoading, empty },
    commands: searchHandler,
    selectHandler,
    setPhone,
  } = useTradeInDecl("test-drive_declaration");

  useEffect(() => {
    EventBus.on("open-declaration-window", (e) => console.log(e));
    return () => {
      EventBus.off("open-declaration-window", (e) => console.log(e));
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
          <DeclarationTable declarations={declarations} collectionName ={"test-drive_declaration"}/>
        </DeclarationsWrapper>
      )}
    </AdminWrapper>
  );
}

export { TestDriveDecl };
