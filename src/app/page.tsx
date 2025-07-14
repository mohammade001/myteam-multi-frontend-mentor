import CompontsStories from "@/componts/CompontsStories";
import CompontsTalent from "@/componts/CompontsTalent";
import CompontsTeam from "@/componts/CompontsTeam";
import FooterContact from "@/componts/FooterContact";

export default function Home() {
  return (
    <div className="">
      <CompontsTalent/>
      <CompontsTeam/>
      <CompontsStories/>
      <FooterContact/>
    </div>
  );
}
