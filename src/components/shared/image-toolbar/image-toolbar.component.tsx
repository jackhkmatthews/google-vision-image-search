import React, { useEffect } from "react";
import * as S from "./image-toolbar.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectEditing } from "../../../redux/selectors";
import { setEditing, setCanvasClicks } from "../../../redux/actions";

interface Props {
  className?: string;
}

const ImageToolbar: React.FC<Props> = ({ className }: Props) => {
  const editing = useSelector(selectEditing);
  const dispatch = useDispatch();
  const handleClick = (): void => {
    const leavingEditMode = editing;
    if (leavingEditMode) {
      dispatch(setCanvasClicks([]));
    }
    dispatch(setEditing(!editing));
  };
  useEffect(() => {
    return function cleanUp(): void {
      dispatch(setEditing(false));
    };
  }, [dispatch]);
  return (
    <S.ImageToolbar className={className}>
      <S.StyledMainLayout>
        <S.Link to={"/images"}>
          <S.Title>Back to images</S.Title>
        </S.Link>
        <S.CTA red={editing} onClick={handleClick}>
          {editing ? "Cancel" : "Edit"}
        </S.CTA>
      </S.StyledMainLayout>
    </S.ImageToolbar>
  );
};

export default ImageToolbar;
