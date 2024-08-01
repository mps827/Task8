import classes from './style/LoadHandling.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
const LoadHandling = () => {
  const loading = useSelector((state: RootState) => state.loading.hasLoading);

  return (
    <>
      {loading && (
        <div className={classes.loaderBox}>
          <div className={classes.loader}></div>
        </div>
      )}
    </>
  );
};
export default LoadHandling;
