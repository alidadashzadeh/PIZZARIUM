/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import AddPopup from "../../ui/AddPopup";
import Button from "../../ui/Button";

// const Button = styled.button`
// 	background-color: var(--color-yellow-700);
// 	color: var(--color-grey-50);
// 	letter-spacing: 1px;
// 	font-size: 16px;
// 	font-weight: 500;
// 	padding: 0.5rem 2rem;
// 	margin-top: 1rem;
// 	border-radius: 10px;
// 	transition: all 0.3s;
// 	opacity: 0;
// `;

const Img = styled.img`
	transition: all 0.3s;
`;
const StyledSignaturePizzaItem = styled.div`
	position: relative;
	cursor: pointer;
	border-radius: 25px;

	&:hover ${Button} {
		opacity: 1;
	}

	&:hover ${Img} {
		transform: scale(1.1);
	}
`;

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
`;

const Details = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	color: var(--color-grey-200);
	padding: 0 1rem;
	z-index: 1000;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 1px;
	padding-bottom: 8rem;
`;

const Overlay = styled.div`
	position: absolute;
	background-color: rgba(27, 19, 19, 0.7);
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const Type = styled.div`
	position: absolute;
	right: 25px;
	top: 0;
	background-color: var(--color-yellow-700);
	z-index: 1000;
	color: var(--color-grey-50);
	letter-spacing: 1px;
	font-size: 18px;
	font-weight: 500;
	padding: 1rem;
	border-radius: 0 0 10px 10px;
	writing-mode: vertical-lr;
`;
const Title = styled.div`
	font-size: 22px;
	font-weight: 600;
	margin-bottom: 1rem;
`;
const Description = styled.div`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 1rem;
`;

const Price = styled.div``;

const StyledAddButton = styled(Button)`
	opacity: 0;
`;

function SignaturePizzaItem({ pizza }) {
	const [addPopup, setAddPopup] = useState(false);
	const { name, details, Veggie, picture, price } = pizza;

	return (
		<StyledSignaturePizzaItem onMouseLeave={() => setAddPopup(false)}>
			<ImgContainer>
				<Img src={picture} />
			</ImgContainer>
			<Details>
				<Title>{name}</Title>
				<Description>{details}</Description>
				<Price>Starting from: {price.small}</Price>

				<StyledAddButton onClick={() => setAddPopup(true)}>
					ADD TO ORDER
				</StyledAddButton>
			</Details>
			{Veggie && <Type>Veggie</Type>}
			{addPopup && <AddPopup pizza={pizza} setAddPopup={setAddPopup} />}
			<Overlay />
		</StyledSignaturePizzaItem>
	);
}

export default SignaturePizzaItem;
