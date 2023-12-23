'use client';
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import ThinLine from './components/ThinLine'
import EventCard from './components/EventCard'
import PlayerCard from './components/PlayerCard'
import VotingCard from './components/VotingCard'
import VideoCard from './components/VideoCard'
import { useState } from 'react'
import build from 'next/dist/build'
// <Link href="/users">Users</Link>
//<a href="/api/auth/login">Login</a>
//<a href="/api/auth/logout">Logout</a>
//<a href="/profile">Profile</a>

export default function Home({}) {
  const [mostChamp, setMostChamp] = useState("Not Selected");
  const [leastChamp, setLeastChamp] = useState("Not Selected");
  const [mostPlayers, setMostPlayers] = useState("Not Selected");
  const [champDeaths, setChampDeaths] = useState("Not Selected");
  const [winrate, setWinrate] = useState("Not Selected");
  const [bestKDA, setBestKDA] = useState("Not Selected");
  const [mostDeaths, setMostDeaths] = useState("Not Selected");
  const [surrender, setSurrender] = useState("Not Selected");
  const [firstBlood, setFirstBlood] = useState("Not Selected");
  const [lowFirstBlood, setLowFirstBlood] = useState("Not Selected");
  const [building, setBuilding] = useState("Not Selected");
  const [unique, setUnique] = useState("Not Selected");
  const [mostKills, setMostKills] = useState("Not Selected");
  const [mostAbilities, setMostAbilities] = useState("Not Selected");
  const [leastAbilities, setLeastAbilities] = useState("Not Selected");
  const [ping, setPing] = useState("Not Selected");
  const [bait, setBait] = useState("Not Selected");
  const [dead, setDead] = useState("Not Selected");
  const [penta, setPenta] = useState("Not Selected");
  const [aram, setAram] = useState("Not Selected");
  const [alive, setAlive] = useState("Not Selected");
  const [mostPing, setMostPing] = useState("Not Selected");
  const [wukong, setWukong] = useState("Not Selected");
  const [honor, setHonor] = useState("Not Selected");
  const [ban, setBan] = useState("Not Selected");
  const [handicap, setHandicap] = useState("Not Selected");
  const [impressive, setImpressive] = useState("Not Selected");
  const [funny, setFunny] = useState("Not Selected");

  const changeMostChamp = (mostChamp: string) => {
    setMostChamp(mostChamp);
  }
  const changeLeastChamp = (leastChamp: string) => {
    setLeastChamp(leastChamp);
  }
  const changeMostPlayers = (mostPlayers: string) => {
    setMostPlayers(mostPlayers);
  }
  const changeChampDeaths = (champDeaths: string) => {
    setChampDeaths(champDeaths);
  }
  const changeWinrate = (winrate: string) => {
    setWinrate(winrate);
  }
  const changeBestKDA = (bestKDA: string) => {
    setBestKDA(bestKDA);
  }
  const changeMostDeaths = (mostDeaths: string) => {
    setMostDeaths(mostDeaths);
  }
  const changeSurrender = (surrender: string) => {
    setSurrender(surrender);
  }
  const changeFirstBlood = (firstBlood: string) => {
    setFirstBlood(firstBlood);
  }
  const changeLowFirstBlood = (lowFirstBlood: string) => {
    setLowFirstBlood(lowFirstBlood);
  }
  const changeBuilding = (building: string) => {
    setBuilding(building);
  }
  const changeUnique = (unique: string) => {
    setUnique(unique);
  }
  const changeMostKills = (mostKills: string) => {
    setMostKills(mostKills);
  }
  const changeMostAbilities = (mostAbilities: string) => {
    setMostAbilities(mostAbilities);
  }
  const changeLeastAbilities = (leastAbilities: string) => {
    setLeastAbilities(leastAbilities);
  }
  const changePing = (ping: string) => {
    setPing(ping);
  }
  const changeBait = (bait: string) => {
    setBait(bait);
  }
  const changeDead = (dead: string) => {
    setDead(dead);
  }
  const changePenta = (penta: string) => {
    setPenta(penta);
  }
  const changeAram = (aram: string) => {
    setAram(aram);
  }
  const changeAlive = (alive: string) => {
    setAlive(alive);
  }
  const changeMostPing = (mostPing: string) => {
    setMostPing(mostPing);
  }
  const changeWukong = (wukong: string) => {
    setWukong(wukong);
  }
  const changeHonor = (honor: string) => {
    setHonor(honor);
  }
  const changeBan = (ban: string) => {
    setBan(ban);
  }
  const changeHandicap = (handicap: string) => {
    setHandicap(handicap);
  }
  const changeImpressive = (impressive: string) => {
    setImpressive(impressive);
  }
  const changeFunny = (funny: string) => {
    setFunny(funny);
  }
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        '{' + 
        'mostChamp: ' + mostChamp + ', ' +
        'leastChamp: ' + leastChamp + ', ' +
        'mostPlayers: ' + mostPlayers + ', ' +
        'champDeaths: ' + champDeaths + ', ' +
        'winrate: ' + winrate + ', ' +
        'bestKDA: ' + bestKDA + ', ' +
        'mostDeaths: ' + mostDeaths + ', ' +
        'surrender: ' + surrender + ', ' +
        'firstBlood: ' + firstBlood + ', ' +
        'lowFirstBlood: ' + lowFirstBlood + ', ' +
        'building: ' + building + ', ' +
        'unique: ' + unique + ', ' +
        'mostKills: ' + mostKills + ', ' +
        'mostAbilities: ' + mostAbilities + ', ' +
        'leastAbilities: ' + leastAbilities + ', ' +
        'ping: ' + ping + ', ' +
        'bait: ' + bait + ', ' +
        'dead: ' + dead + ', ' +
        'penta: ' + penta + ', ' +
        'aram: ' + aram + ', ' +
        'alive: ' + alive + ', ' +
        'mostPing: ' + mostPing + ', ' +
        'wukong: ' + wukong + ', ' +
        'honor: ' + honor + ', ' +
        'ban: ' + ban + ', ' +
        'handicap: ' + handicap + ', ' +
        'impressive: ' + impressive + ', ' +
        'funny: ' + funny +
        '}'
      );
      alert('Text copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy text to clipboard.', err);
    }
  };

  return (
    <main>
        <div className='flex justify-between'>
        <h1 className={"text-3xl"}>CRYSTAL BALL</h1>
        <a href="/notes" className="text-xl">FAQ</a>
        </div>
        <a>Note - Your progress doesn't save so don't leave this tab!</a>
        <br />
        <a>Whoever gets the most amount of points gets a skin or something equivalent, check FAQ for more info</a>
        <br />
        <a>There's a button at the bottom to copy your results to your clipboard, please paste it in discord DMS ty</a>
        <br />
        <br />
        <a>There's also an ARENA tournament on the 23rd around 9pm for another skin</a>
        <br />
        <a>This could be pushed back if people are busy though (need 8 people)</a>

        <ThinLine />
        <h1 className="text-2xl">CHAMPIONS</h1>
        <div className="flex flex-row space-x-4">
        <PlayerCard labelText="Which champion was picked the most?" choicesArray={['Darius', 'Fiora', 'Jax', 'Pyke', 'Thresh', 'Sett']} setChoice={changeMostChamp} choice={mostChamp}/>
        <PlayerCard labelText="Which champions was picked the least? (excluding Briar and Hwei)" choicesArray={['Gnar', 'Quinn', 'Rek\'Sai', 'Rumble', 'Skarner', 'Teemo']} setChoice={changeLeastChamp} choice={leastChamp}/>
        <PlayerCard labelText="Which champion has been picked by the highest number of players?" choicesArray={['Akali', 'Darius', 'Jhin', 'Morgana', 'Pyke', 'Zed']} setChoice={changeMostPlayers} choice={mostPlayers}/>
        <PlayerCard labelText="Which champion has the highest number of deaths on average? (5 game minimum)" choicesArray={['Karthus', 'Kassadin', 'Kennen', 'Rengar', 'Sion', 'Vladimir']} setChoice={changeChampDeaths} choice={champDeaths}/>
        <PlayerCard labelText="Which champion has the highest winrate? (10 game minimum)" choicesArray={['Brand', 'Sona', 'Tahm Kench', 'Vel\'Koz', 'Zeri', 'Zyra']} setChoice={changeWinrate} choice={winrate}/>
        </div>
        <br />
        <h1 className="text-2xl">PLAYERS - Each player is used only once</h1>
        <div className="flex flex-row space-x-4">
        <PlayerCard labelText="Who has the highest overall KDA?" choicesArray={['Andrew', 'Caleb', 'Chris', 'Elijah', 'Jacob', 'Matthew']} setChoice={changeBestKDA} choice={bestKDA}/>
        <PlayerCard labelText="Who has the highest number of deaths on average?" choicesArray={['Elijah', 'Eric', 'Hasuki', 'Parsa', 'Sean', 'Tony']} setChoice={changeMostDeaths} choice={mostDeaths}/>
        <PlayerCard labelText="Who has the highest surrender rate?" choicesArray={['Jacob', 'Kendrick', 'Lingesh', 'Matthew', 'Parsa', 'Tony']} setChoice={changeSurrender} choice={surrender}/>
        <PlayerCard labelText="Who has the highest first blood rate?" choicesArray={['Andrew', 'Chris', 'Elijah', 'Jacob', 'Kendrick', 'Parsa']} setChoice={changeFirstBlood} choice={firstBlood}/>
        <PlayerCard labelText="Who has the lowest first blood rate?" choicesArray={['Caleb', 'Eric', 'Hasuki', 'Lingesh', 'Matthew', 'Sean']} setChoice={changeLowFirstBlood} choice={lowFirstBlood}/>
        </div>
        <br />
        <div className="flex flex-row space-x-4">
        <PlayerCard labelText="Who dealt the most damage to buildings?" choicesArray={['Andrew', 'Elijah', 'Eric', 'Hasuki', 'Jacob', 'Parsa']} setChoice={changeBuilding} choice={building}/>
        <PlayerCard labelText="Who plays the highest number of unique champs relative to games played?" choicesArray={['Andrew', 'Elijah', 'Hasuki', 'Kendrick', 'Lingesh', 'Matthew']} setChoice={changeUnique} choice={unique}/>
        <PlayerCard labelText="Who had the highest number of kills in a single Summoner's Rift game?" choicesArray={['Andrew', 'Elijah', 'Eric', 'Jacob', 'Tony', 'Parsa']} setChoice={changeMostKills} choice={mostKills}/>
        <PlayerCard labelText="Who uses their abilities the most per game?" choicesArray={['Caleb', 'Chris', 'Elijah', 'Eric', 'Hasuki', 'Parsa']} setChoice={changeMostAbilities} choice={mostAbilities}/>
        <PlayerCard labelText="Who uses their abilities the least per game?" choicesArray={['Andrew', 'Jacob', 'Kendrick', 'Lingesh', 'MatThew', 'Sean']} setChoice={changeLeastAbilities} choice={leastAbilities}/>
        </div>
        <br />
        <div className="flex flex-row space-x-4">
        <PlayerCard labelText="Who pings the most per game?" choicesArray={['Caleb', 'Chris', 'Jacob', 'Matthew', 'Tony', 'Parsa']} setChoice={changePing} choice={ping}/>
        <PlayerCard labelText="Who used the bait ping the least?" choicesArray={['Chris', 'Eric', 'Hasuki', 'Kendrick', 'Lingesh', 'Matthew']} setChoice={changeBait} choice={bait}/>
        <PlayerCard labelText="Who spends the most time dead on average?" choicesArray={['Caleb', 'Chris', 'Elijah', 'Eric', 'Hasuki', 'Sean']} setChoice={changeDead} choice={dead}/>
        </div>
        <br />
        <h1 className="text-2xl">RANDOM TRIVIA</h1>
        <div className="flex flex-row space-x-4">
        <EventCard labelText="How many pentakills did we get in total this year?" choicesArray={['10-14', '14-19', '20-24', '24-29', '>30']} setChoice={changePenta} choice={penta}/>
        <EventCard labelText="Caleb had the most number of kills in an ARAM game, how many did he get?" choicesArray={['30-34', '35-39', '40-44', '45-49', '>50']} setChoice={changeAram} choice={aram}/>
        <EventCard labelText="Tony spent the longest time alive without dying, how long did he live?" choicesArray={['20 - 24 minutes', '25 - 29 minutes', '30 - 34 minutes', '35 - 40 minutes']} setChoice={changeAlive} choice={alive}/>
        <EventCard labelText="Chris sent the most amount of pings in a single game, how many did he send?" choicesArray={['<50', '50-99', '100-149', '150-199', '200-249', '>250']} setChoice={changeMostPing} choice={mostPing}/>
        <EventCard labelText="Wukong is the only champ that is not stored in the database as it's own name, what is it instead?" choicesArray={['MonkeyKing', 'Monke', 'SunWukong', 'Harambe']} setChoice={changeWukong} choice={wukong}/>
        </div>
        <h1 className="text-2xl">VOTING - Doesn't count for points</h1>
        <div className="flex flex-row space-x-4">
        <VotingCard labelText="Who would you honor irl?" choicesArray={['Andrew','Caleb', 'Chris', 'Elijah', 'Eric', 'Hasuki', 'Jacob', 'Kendrick', 'Lingesh', 'Matthew', 'Sean', 'Tony', 'Parsa']} setChoice={changeHonor} choice={honor}/>
        <VotingCard labelText="Who deserves to get banned?" choicesArray={['Andrew','Caleb', 'Chris', 'Elijah', 'Eric', 'Hasuki', 'Jacob', 'Kendrick', 'Lingesh', 'Matthew', 'Sean', 'Tony', 'Parsa']} setChoice={changeBan} choice={ban}/>
        <VotingCard labelText="Who should get a (negative) handicap in the tournament?" choicesArray={['Andrew','Caleb', 'Chris', 'Elijah', 'Eric', 'Hasuki', 'Jacob', 'Kendrick', 'Lingesh', 'Matthew', 'Sean', 'Tony', 'Parsa']} setChoice={changeHandicap} choice={handicap}/>
        <VideoCard labelText="Most impressive clip of the year?" 
        choicesArray={['https://youtu.be/VZsHbkGEX3c',
         'https://youtu.be/0mvxGA-g4l8',
          'https://youtu.be/G4lnuN9kzZE',
           'https://youtu.be/gOfUbB9EmDE',
            'https://youtu.be/nq9boeCb54w',
          'https://youtu.be/nNRxky8aNwA']}
        nameArray={['Matthew', 'Tony', 'Jacob', 'Elijah', 'Parsa','Andrew']} setChoice={changeImpressive} choice={impressive}/>
        <VideoCard labelText="Funniest clip of the year?" 
        choicesArray={['https://www.youtube.com/watch?v=skz1MGW5MM4',
         'https://discord.com/channels/336692837175394307/809272874580967484/1163374573564215306',
          'https://discord.com/channels/336692837175394307/541432213993029653/1090507614611324948',
           'https://discord.com/channels/336692837175394307/778866576471490592/1086906108255408208',
            'https://discord.com/channels/336692837175394307/541432213993029653/1072776882124234782',
          'https://youtu.be/7jsohPwkHdI']}
        nameArray={['Lingesh', 'Jacob', 'Parsa', 'Tom Clancy', 'Tony', 'Elijah']} setChoice={changeFunny} choice={funny}/>
        </div>
        <br />
        <div className='flex justify-center items-center flex-col space-y-2'>
        <a className='text-2xl'>Thanks for participating this year</a>
        <br />
        <br />
        <button className="btn btn-accent" onClick={copyToClipboard}>Copy Results to Clipboard</button>
        </div>
    </main>
  )
}