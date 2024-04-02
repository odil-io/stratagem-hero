import { IStratagem, Stratagem } from '../models/stratagem.model';

export const Stratagems: Record<string, IStratagem[]> = {
  'Patriotic Adminstration Center': [
    new Stratagem('MG-43 Machine Gun', ['down', 'left', 'down', 'up', 'right'], 'MG-43icon.svg', 'Supply'),
    new Stratagem('APW-1 Anti-Materiel Rifle', ['down', 'left', 'right', 'up', 'down'], 'APW-1icon.svg', 'Supply'),
    new Stratagem('M-105 Stalwart', ['down', 'left', 'down', 'up', 'up', 'left'], 'M-105icon.svg', 'Supply'),
    new Stratagem('EAT-17 Expendable Anti-Tank', ['down', 'down', 'left', 'up', 'right'], 'EAT-17icon.svg', 'Supply'),
    new Stratagem('GR-8 Recoilless Rifle', ['down', 'left', 'right', 'right', 'left'], 'GR-8icon.svg', 'Supply'),
    new Stratagem('FLAM-40 "Incinerator" Flamethrower', ['down', 'left', 'up', 'down', 'up'], 'FLAM-40icon.svg', 'Supply'),
    new Stratagem('AC-8 Autocannon', ['down', 'left', 'down', 'up', 'up', 'right'], 'AC-8icon.svg', 'Supply'),
    new Stratagem('RS-422 Railgun', ['down', 'right', 'down', 'up', 'left', 'right'], 'RS-422icon.svg', 'Supply'),
    new Stratagem('FAF-14 Spear', ['down', 'down', 'up', 'down', 'down'], 'FAF-14icon.svg', 'Supply'),
  ],
  'Orbital Cannons': [
    new Stratagem('Orbital Gatling Barrage', ['right', 'down', 'left', 'up', 'up'], 'OrbitalGatlingicon.svg', 'Offensive'),
    new Stratagem('Orbital Airburst Strike', ['right', 'right', 'right'], 'OrbitalAirbursticon.svg', 'Offensive'),
    new Stratagem('Orbital 120MM HE Barrage', ['right', 'right', 'down', 'left', 'right', 'down'], 'Orbital120icon.svg', 'Offensive'),
    new Stratagem('Orbital 380MM HE Barrage', ['right', 'down', 'up', 'up', 'left', 'down', 'down'], 'Orbital380icon.svg', 'Offensive'),
    new Stratagem('Orbital Walking Barrage', ['right', 'down', 'right', 'down', 'right', 'down'], 'OrbitalWalkingicon.svg', 'Offensive'),
    new Stratagem('Orbital Laser', ['right', 'down', 'up', 'right', 'down'], 'OrbitalLasericon.svg', 'Offensive'),
    new Stratagem('Orbital Railcannon Strike', ['right', 'up', 'down', 'down', 'right'], 'OrbitalRailcannonicon.svg', 'Offensive'),
  ],
  Hangar: [
    new Stratagem('Eagle Strafing Run', ['up', 'right', 'right'], 'EagleStrafingicon.svg', 'Offensive'),
    new Stratagem('Eagle Airstrike', ['up', 'right', 'down', 'right'], 'EagleAirstrikeicon.svg', 'Offensive'),
    new Stratagem('Eagle Cluster Bomb', ['up', 'right', 'down', 'down', 'right'], 'EagleClusterbombicon.svg', 'Offensive'),
    new Stratagem('Eagle Napalm Airstrike', ['up', 'right', 'down', 'up'], 'EagleNapalmicon.svg', 'Offensive'),
    new Stratagem('LIFT-850 Jump Pack', ['down', 'up', 'up', 'down', 'up'], 'LIFT-850icon.svg', 'Supply'),
    new Stratagem('Eagle Smoke Strike', ['up', 'right', 'up', 'down'], 'EagleSmokeicon.svg', 'Offensive'),
    new Stratagem('Eagle 110MM Rocket Pods', ['up', 'right', 'up', 'left'], 'EagleRocketpodicon.svg', 'Offensive'),
    new Stratagem('Eagle 500KG Bomb', ['up', 'right', 'down', 'down', 'down'], 'Eagle500icon.svg', 'Offensive'),
    new Stratagem('Eagle Rearm', ['up', 'up', 'left', 'up', 'right'], 'HD2_Eagle_Rearm_Icon.svg', 'Offensive'),
  ],
  Bridge: [
    new Stratagem('Orbital Precision Strike', ['right', 'right', 'up'], 'OrbitalPrecisionicon.svg', 'Offensive'),
    new Stratagem('Orbital Gas Strike', ['right', 'right', 'down', 'right'], 'OrbitalGasicon.svg', 'Offensive'),
    new Stratagem('Orbital EMS Strike', ['right', 'right', 'left', 'down'], 'OrbitalEMSicon.svg', 'Offensive'),
    new Stratagem('Orbital Smoke Strike', ['right', 'right', 'down', 'up'], 'OrbitalSmokeicon.svg', 'Offensive'),
    new Stratagem('HMG Emplacement', ['down', 'up', 'left', 'right', 'right', 'left'], 'HMGTurreticon.svg', 'Defensive'),
    new Stratagem('Shield Generator Relay', ['down', 'down', 'left', 'right', 'left', 'right'], 'Shieldrelayicon.svg', 'Defensive'),
    new Stratagem('Tesla Tower', ['down', 'up', 'right', 'up', 'left', 'right'], 'Teslaicon.svg', 'Defensive'),
  ],
  'Engineering Bay': [
    new Stratagem('Anti-Personnel Minefield', ['down', 'left', 'up', 'right'], 'Minefieldicon.svg', 'Defensive'),
    new Stratagem('B-1 Supply Pack', ['down', 'left', 'down', 'up', 'up', 'down'], 'B-1icon.svg', 'Supply'),
    new Stratagem('GL-21 Grenade Launcher', ['down', 'left', 'up', 'left', 'down'], 'GL-21icon.svg', 'Supply'),
    new Stratagem('LAS-98 Laser Cannon', ['down', 'left', 'down', 'up', 'left'], 'LAS-98icon.svg', 'Supply'),
    new Stratagem('Incendiary Mines', ['down', 'left', 'left', 'down'], 'Fireminefieldicon.svg', 'Defensive'),
    new Stratagem('AX/LAS-5 "Guard Dog" Rover', ['down', 'up', 'left', 'up', 'right', 'right'], 'AX-LAS-5icon.svg', 'Supply'),
    new Stratagem('SH-20 Ballistic Shield Backpack', ['down', 'left', 'down', 'down', 'up', 'left'], 'SH-20icon.svg', 'Supply'),
    new Stratagem('ARC-3 Arc Thrower', ['down', 'right', 'down', 'up', 'left', 'left'], 'ARC-3icon.svg', 'Supply'),
    new Stratagem('LAS-99 Quasar Cannon', ['down', 'down', 'up', 'left', 'right'], 'LAS-99icon.svg', 'Supply'),
    new Stratagem('SH-32 Shield Generator Pack', ['down', 'up', 'left', 'right', 'left', 'right'], 'SH-32icon.svg', 'Supply'),
  ],
  'Robotic Workshop': [
    new Stratagem('Machine Gun Sentry', ['down', 'up', 'right', 'right', 'up'], 'MGsentryicon.svg', 'Defensive'),
    new Stratagem('Gatling Sentry', ['down', 'up', 'right', 'left'], 'Gatlingsentryicon.svg', 'Defensive'),
    new Stratagem('Mortar Sentry', ['down', 'up', 'right', 'right', 'down'], 'Mortarsentryicon.svg', 'Defensive'),
    new Stratagem('AD-334 Guard Dog', ['down', 'up', 'left', 'up', 'right', 'down'], 'AX-AR-23icon.svg', 'Supply'),
    new Stratagem('Autocannon Sentry', ['down', 'up', 'right', 'up', 'left', 'up'], 'Autocannoasentryicon.svg', 'Defensive'),
    new Stratagem('Rocket Sentry', ['down', 'up', 'right', 'right', 'left'], 'Missilesentryicon.svg', 'Defensive'),
    new Stratagem('EMS Mortar Sentry', ['down', 'up', 'right', 'down', 'right'], 'EMSmortaricon.svg', 'Defensive'),
    new Stratagem('EXO-45 Patriot Exosuit', ['left', 'down', 'right', 'up', 'left', 'down', 'down'], 'PatriotIcon.svg', 'Defensive'),
  ],
  'Mission Stratagems': [
    new Stratagem('Resupply', ['down', 'down', 'up', 'right'], 'ResupplyIcon.svg', 'Mission'),
    new Stratagem('Reinforce', ['up', 'down', 'right', 'left', 'up'], 'ReinforceIcon.svg', 'Mission'),
    new Stratagem('SOS Beacon', ['up', 'down', 'right', 'up'], 'SOSIcon.svg', 'Mission'),
    new Stratagem('Upload Data', ['down', 'down', 'up', 'up', 'up'], 'UploadDataIcon.svg', 'Mission'),
    new Stratagem('Hellbomb', ['down', 'up', 'left', 'down', 'up', 'right', 'down', 'up'], 'Hellbomb.svg', 'Mission'),
    new Stratagem('SEAF Artillery', ['right', 'up', 'up', 'down'], 'Artillery.svg', 'Mission'),
    new Stratagem('Seismic Probe', ['up', 'up', 'left', 'right', 'down', 'down'], 'SeismicProbeIcon.svg', 'Mission'),
    new Stratagem('Prospecting Drill', ['down', 'down', 'left', 'right', 'down', 'down'], 'DrillingIcon.svg', 'Mission'),
    new Stratagem('Orbital Illumination Flare', ['right', 'right', 'left', 'left'], 'IlluminationFlare.svg', 'Mission'),
    new Stratagem('Super Earth Flag', ['down', 'up', 'down', 'up'], 'SuperEarthFlag.svg', 'Mission'),
  ],
};
