import fs from "fs";
import { ledger } from "@keshavsoft/tallyextract";
const dataPath = "./Data/LedgerNames.json";

const StartFunc = async () => {
    const dataFromTally = await ledger();

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        return {
            LedgerName: element.metadata.name,
            LedgerParentName: element.parent.value,
            LedgerType: element.metadata.type,
            PartyGSTIN: element?.gstregistrationtype?.value
        }
    });

    fs.writeFileSync(dataPath, JSON.stringify(LocalNewArray));

    return LocalNewArray.length;
};

export { StartFunc };