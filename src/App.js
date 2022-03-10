import './App.css';
import PortfolioCard from './portfolioCard';

function App() {

  const alignGrid = {
    'display':'flex',
    'margin-left':'8px',
    'margin-right':'8px',
    'flex-direction':'column',
    'align-items': 'center',
  }
  return (
    <div style={alignGrid} className="App">
      <header className="App-header">
      <h1 style={{'font-size':'3.5rem','margin-bottom':'0px'}}>Portfolio Grid 4</h1>
      <p>This grid shows the items pages in a popup</p>
      </header>
      <div className="grid_items">
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        <PortfolioCard></PortfolioCard>
        
      </div>
    </div>
  );
}

export default App;
