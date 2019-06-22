import { HERO_PHASE, START_OF_SETUP, START_OF_MOVEMENT_PHASE, MOVEMENT_PHASE, CHARGE_PHASE } from 'types/phases'
import { IEffects } from 'types/data'

// General Allegiance Abilities (always active regardless of army composition)
const Abilities: IEffects[] = [
  {
    name: `Gnawholes`,
    desc: `A Skaventide army can include up to 3 GNAWHOLE terrain features (see opposite). After territories have been chosen but before armies are set up, you can set up the GNAWHOLES for your army. Each GNAWHOLE must be set up wholly within 8" of the edge of the battlefield, more than 3" from any enemy units or objectives, and more than 1" from any other terrain features. If both players can set up any terrain features before armies are set up, they must roll off, and the winner chooses who sets up their terrain features first.`,
    when: [START_OF_SETUP],
  },
  {
    name: `Gnawhole: Tunnels Through Reality`,
    desc: `At the start of your movement phase, you can use 1 GNAWHOLE to transport 1 friendly SKAVENTIDE unit. In order to do so, that unit must be wholly within 6" of the GNAWHOLE , and a friendly SKAVENTIDE HERO must be within 6" of the GNAWHOLE . If this is the case, remove the SKAVENTIDE unit from the battlefield and then set it up wholly within 6" of another GNAWHOLE and more than 9" from any enemy models. This counts as that unit's move for that movement phase.`,
    when: [START_OF_MOVEMENT_PHASE],
  },
  {
    name: `Gnawhole: Aura of the Horned Rat`,
    desc: `SKAVENTIDE units treat this terrain feature as having the Arcane scenery rule. In addition, you can add 1 to the dice that determines if a prayer is answered if the prayer is chanted by a friendly SKAVENTIDE PRIEST within 1" of a GNAWHOLE.`,
    when: [HERO_PHASE],
  },
  {
    name: `Gnawhole: Aura of the Horned Rat`,
    desc: `Non-SKAVENTIDE units treat this terrain feature as having the Deadly scenery rule.`,
    when: [MOVEMENT_PHASE, CHARGE_PHASE],
  },
]

export default Abilities
