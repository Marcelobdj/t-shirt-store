import { useMatch } from 'react-router-dom';

const useActiveClass = (path) => {
    const match = useMatch(path);
    return match ? 'active' : '';
};

export default useActiveClass;