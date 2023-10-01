import { Button, Paper } from '@mui/material';
import '../../config/money.values';
import { tuitionRates } from '../../config/money.values';

export function Home() {
    return <div>23-24 undergrad tuition cost per year ${tuitionRates[202324].undergraduate.usCitizensAndResidents.costPerYear}</div>;
}

