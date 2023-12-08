import { Routes, Route } from 'react-router-dom';
import PropsGrid from '../../components/props-grid/props-grid.component';
import SelectedProp from '../../components/selected-prop/selected-prop.component';

const Props = () => {
  return (
    <Routes>
      <Route index element={<PropsGrid />} />
      <Route path=":idPage" element={<SelectedProp />} />
    </Routes>
  )
}

export default Props;