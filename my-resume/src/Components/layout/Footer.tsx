import { footerText } from "../../fixedContent/footer";

export const MyFooter = () => {
    return (
        <div>
            <div>{footerText.title}</div>
            <div>{footerText.welcome}</div>
            <div>{footerText.record}</div>
        </div>
    )
};