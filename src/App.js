import { RedStripe } from './RedStripe'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import { BlueStripe } from './BlueStripe'
import { RecoilRoot } from 'recoil'
import { GreenStripe } from './GreenStripe'
//this is my comment 
const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client = {queryClient}>
        <RecoilRoot>
          <RedStripe/>
          <BlueStripe/>
          <GreenStripe/>
        </RecoilRoot> 
      </QueryClientProvider>
    </div>
  );
}

export default App;
