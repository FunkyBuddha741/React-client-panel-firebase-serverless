import { Link } from "react-router-dom";
import styled from "styled-components";

export const TableContainer = styled.table`
	border-collapse: collapse;
	width: 80%;
	margin: 20px auto;
`;

export const TableHeader = styled.th`
	border: 1px #ddd;
	padding: 8px;
	padding-top: 12px;
	padding-bottom: 12px;
	text-align: left;
	background-color: #ddd;
	color: #0a75ad;
`;

export const TableData = styled.td`
	border: 1px #ddd;
	padding: 8px;
`;

export const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}
`;

export const CustomerLink = styled(Link)`
	background-color: grey;
	text-decoration: none;
	padding: 2px 5px;
	color: white;
	border-radius: 5px;
`;
