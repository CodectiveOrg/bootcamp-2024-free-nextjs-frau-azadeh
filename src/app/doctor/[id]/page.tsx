import doctors from "@/data/doctors.json";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): React.ReactElement {
  const doctor = doctors.find((x) => x.id.toString() === params.id);
    if (!doctor){
        return notFound();
    }
  return (
    <div>
      <h3>{doctor?.name}</h3>
      <p>تخصص: {doctor?.specialty}</p>
      <p>جنسیت: {doctor?.gender}</p>
      <p>درجه علمی: {doctor?.degree}</p>
      <p>زمان کار: {doctor?.workTime}</p>
    </div>
  );
}
