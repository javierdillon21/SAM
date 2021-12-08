import awsExports from "../src/aws-exports";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createEquipo } from "../src/graphql/mutations";
import { useEffect } from "react";
import { listEquipos } from "../src/graphql/queries";

Amplify.configure(awsExports);
export default function Home() {
  const equipo = { nombre: "Caleb", administradorID: "11111111111" };
  async function crear() {
    await API.graphql(graphqlOperation(createEquipo, { input: equipo }));
  }
  useEffect(() => {
    //crear();
    async function ff() {
      const vr = await API.graphql(graphqlOperation(listEquipos));
      console.log(vr);
    }
    ff();
  }, []);

  return <div>HOLA</div>;
}
