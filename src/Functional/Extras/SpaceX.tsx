// React
import { useEffect, useState } from 'react'

// Functional
import { ISpaceXMission } from '../../Interfaces'

// CSS
import styles from '../../CSS/styles.module.css';

const SpaceX = () => {
    const [spaceXNextMission, setSpaceXNextMission] = useState<ISpaceXMission>(
        {"launchNext": {
            "launch_date_utc": "2020-12-06T16:17:00.000Z",
            "details": "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
            "mission_name": "CRS-21",
            "rocket": {
                "rocket_name": "DUMP",
                "rocket_type": "DUMP",
                "rocket_details": {
                    "id": "falcon9",
                    "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9"
                  }
            }
        }
    });
    useEffect(()=> {
        const getSpaceXNextMission = async () => {
            let query = `
            {
                launchNext {
                  launch_date_utc
                  details
                  mission_name
                  rocket {
                    rocket_name
                    rocket_type
                    rocket {
                        id
                        wikipedia
                    }
                  }
                }
              }
            `
            let SpaceXMission = await(await fetch("https://api.spacex.land/graphql/", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'Accept': 'application/json'
                    },
                body: JSON.stringify({query})}
                )).json();
            setSpaceXNextMission({
                launchNext: {
                    launch_date_utc: SpaceXMission.data.launchNext.launch_date_utc,
                    details: SpaceXMission.data.launchNext.details,
                    mission_name: SpaceXMission.data.launchNext.mission_name,
                    rocket: {
                        rocket_name: SpaceXMission.data.launchNext.rocket.rocket_name,
                        rocket_type: SpaceXMission.data.launchNext.rocket.rocket_type,
                        rocket_details: {
                            id: SpaceXMission.data.launchNext.rocket.rocket.id,
                            wikipedia: SpaceXMission.data.launchNext.rocket.rocket.wikipedia
                        }
                    }
                }
            });
            
        }

        getSpaceXNextMission();
    },[]);

    return (
        <main className={styles.Content}>
        <h1>Space X</h1>
        <h2>Mission name: {spaceXNextMission.launchNext.mission_name}</h2>
        <h3>Launch time: {spaceXNextMission.launchNext.launch_date_utc}</h3>
        <p>{spaceXNextMission.launchNext.details}</p>
        <p>The rocket that wil be used is a {spaceXNextMission.launchNext.rocket.rocket_name}. <a href={spaceXNextMission.launchNext.rocket.rocket_details.wikipedia}>Find more information about that type here</a></p>

        </main>
    )
}

export default SpaceX;