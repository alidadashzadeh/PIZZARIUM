import styled from "styled-components";

const DoughTypeContainer = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
`;

const DoughDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
function CreatePizzaDough() {
  return (
    <div>
      <DoughTypeContainer>
        <img src="regular-dough.jpg" />

        <DoughDetails>
          <span>Regular</span>
        </DoughDetails>
      </DoughTypeContainer>
      <DoughTypeContainer>
        <img src="whole-wheat-dough.jpg" />
        <DoughDetails>
          <span>Whole Wheat</span>
        </DoughDetails>
      </DoughTypeContainer>
      <DoughTypeContainer>
        <img src="multigrain-pizza-dough.jpg" />
        <DoughDetails>
          <span>Gluten Free Multigrain</span>
        </DoughDetails>
      </DoughTypeContainer>
    </div>
  );
}

export default CreatePizzaDough;
