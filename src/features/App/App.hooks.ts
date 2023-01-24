import { useDispatch, useSelector } from "react-redux";
import { getCompanyInfoData } from "../../actions";
import { AppDispatch, RootState } from "../../app/store";

export const useStateSelector = () => ({
  companyInfoData: useSelector(
    (state: RootState) => state.klaimData.companyInfoData
  ),
});

export const useActionDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return {
    getCompanyInfoData: () => dispatch(getCompanyInfoData()),
  };
};
