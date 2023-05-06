import React from "react";
import { useGetDeclarations } from "../../../hooks/useGetDeclarations";
import { Loading } from "../../../components/UI/Loader/Loading";
import { DeclarationsWrapper } from "../../../components/UI/DeclarationsWrapper/DeclarationsWrapper";
import { AdminWrapper } from "../../../components/UI/AdminWrapper/AdminWrapper";
import { CountManager } from "../../../components/admin/CountManager/CountManager";
import { SearchOfNumber } from "../../../components/admin/SearchOfNumber/SearchOfNumber";
import { Select } from "../../../components/UI/Select/Select";
import { DeclarationTable } from "../../../components/admin/DeclarationTable/DeclarationTable";
import { useTradeInDecl } from "../TradeInDecl/useTradeInDecl";
const selectData = {
  name: "All",
  data: ["All", "Approved", "Denied"],
  field: "approved",
};
function CreditDecl() {
  const {
    models: { declarations, isLoading, empty },
    commands: searchHandler,
    selectHandler,
    setPhone,
  } = useTradeInDecl('buy_car_on_credit');
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
            collectionName={'buy_car_on_credit'}
          />
        </DeclarationsWrapper>
      )}
    </AdminWrapper>
  );
}

export { CreditDecl };
