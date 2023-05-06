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
function InsuranceDecl() {
  const {
    models: { declarations, isLoading, empty },
    commands: searchHandler,
    selectHandler,
    setPhone,
  } = useTradeInDecl("car_insurance");
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
            collectionName={"car_insurance"}
          />
        </DeclarationsWrapper>
      )}
    </AdminWrapper>
  );
}

export { InsuranceDecl };
