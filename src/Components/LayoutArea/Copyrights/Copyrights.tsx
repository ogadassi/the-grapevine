import "./Copyrights.css";
import Marquee from "react-fast-marquee";

function Copyrights(): JSX.Element {
  const quotes = [
    "אני לא מאמין, מישהו שם פה מלוואח -בני גאורגייב, 2019",
    "יאללה מה כבר דבורות עוזרות? -עומר לנציאנו, 2019",
    "הידעת שיש 40 מיליון קנגרואים? -בני גאורגייב, 2019",
    "אתה מכיר מקום טוב לבאקלווה? -בני גאורגייב, 2020",
    "בלע אותי שקנאי כשהייתי קטן -עומר לנציאנו, 2020",
    "תמיד איכשהו נכנס לפה שומשום -עומר לנציאנו, 2021",
    "פעם כתבתי אריאל שרון בצומח -עומר שמר, 2021",
    "כל הדברים הגדולים ביותר נעשו ביד -רז אברם, 2021",
    "אין כמו לסיים סרט של 3 שעות עם זיון בעין -רועי יוסף שמעיה, 2021",
    "אנחנו צריכים להסדיר את חוקי התעופה של רז -עומרי רם, 2022",
    "אין דבר שאני רוצה לעשות פחות מלשחק יותר -עומרי רם, 2023",
    "העמדת פנים מדי פעם כרוכה בקצת רצח -עומרי רם, 2023",
    "אל תבזבזו המבורגרים על האנשים העצובים -עומרי רם, 2023",
    "אולי אני אעשה חיקוי של עאהד תמימי? -עומר לנציאנו, 2023",
  ];

  function getQuoteStr() {
    let quoteStr = "";
    let shuffledArr = [];
    const spacer =
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; // 10 non-breaking spaces

    for (let i = quotes.length - 1; i >= 0; i--) {
      shuffledArr.push(
        ...quotes.splice(Math.floor(Math.random() * quotes.length), 1)
      );
    }

    quoteStr = `${spacer}${shuffledArr.join(spacer)}`;

    return quoteStr;
  }

  return (
    <div className="Copyrights">
      <Marquee direction="right">
        <span dangerouslySetInnerHTML={{ __html: getQuoteStr() }} />
      </Marquee>
    </div>
  );
}

export default Copyrights;
