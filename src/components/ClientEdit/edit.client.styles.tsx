import styled from "styled-components";

export const AddInputContainer = styled.div`
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f0f0f0;
`;
export const AddInputTitle = styled.div`
	display: flex;
	align-items: center;
	color: #0a75ad;
`;

export const AddInputLogo = styled.i`
	padding-right: 5px;
`;

export const AddClientTitle = styled.h4`
	padding-left: 5px;
`;

export const AddInputField = styled.div`
	border-radius: 5px;
	padding: 20px;
`;

export const AddInputEmail = styled.input`
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	&:focus {
		outline: none;
	}
`;
export const AddInputPassword = styled.input`
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	&:focus {
		outline: none;
	}
`;

export const AddLoginButton = styled.button`
	width: 100%;
	background-color: #4caf50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background-color: #0aad94;
		transition: 0.4s ease-in-out;
	}
`;
