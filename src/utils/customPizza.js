export default function SizePrice(size) {
	if (size === "Medium") return 1;
	else if (size === "Small") return 0.9;
	else if (size === "Large") return 1.2;
	else if (size === "Extra Large") return 1.46;
	else if (size === "Party Size") return 1.88;
	else return 1;
}
