import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../Redux/action";
import { FilterInput, Label } from "./Filter.styled";
import { getFilter } from "../../Redux/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterChange = (e) => dispatch(actions.filterChange(e.target.value));
  return (
    <Label>
      Find contact by name
      <FilterInput
        type="text"
        value={filter}
        onChange={filterChange}
        name="filter"
        placeholder="Enter contact name"
      />
    </Label>
  );
}
