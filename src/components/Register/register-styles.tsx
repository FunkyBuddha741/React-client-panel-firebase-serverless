import styled from "styled-components";

export const RegInputContainer = styled.div`
	padding: 20px;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InvalidField = styled.div`
	background-color: #ffe4e1;
	width: 60%;
	color: #ad420a;
	margin-bottom: 10px;
	border-radius: 7px;
	display: flex;
	justify-content: center;
`;
export const RegInputTitle = styled.div`
	display: flex;
	align-items: center;
	color: #0a75ad;
`;

export const RegLoginLogo = styled.i`
	padding-right: 5px;
`;

export const RegLoginText = styled.h1`
	padding-left: 5px;
`;

export const RegInputField = styled.div`
	border-radius: 5px;
	padding: 20px;
`;

export const RegInputEmail = styled.input`
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
export const RegInputPassword = styled.input`
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

export const RegLoginButton = styled.button`
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
		transition: 0.4s ease-out;
	}
	&:focus {
		outline: none;
	}
`;
