
import ElementalEcho from "../pages/gameprojects/ElementalEcho";
import FaceOfTheFuture from "../pages/gameprojects/FaceOfTheFuture";
import Hoverline from "../pages/gameprojects/Hoverline";
import ExtractionProtocol from "../pages/gameprojects/ExtractionProtocol";
import TrashBrosApocalypse from "../pages/gameprojects/TrashBrosApocalypse";
import PremiumService from "../pages/gameprojects/PremiumService";


export const gameProjectsData: Record<
  string,
  { component: React.ComponentType }
> = {
  "elemental-echo": {
    component: ElementalEcho,
  },
  "face-of-the-future": {
    component: FaceOfTheFuture,
  },
  "hoverline": { 
    component: Hoverline
  },
  "extraction-protocol": {
    component: ExtractionProtocol
  },
  "trash-bros-apocalypse": { 
    component: TrashBrosApocalypse 
  },
  "premium-service": {
    component: PremiumService
  }

};