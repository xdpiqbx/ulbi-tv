import { usePagination } from '../../../hooks/usePagination';
// import s from './Pagination.module.css';

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => {
        return (
          <span
            onClick={() => changePage(p)}
            className={p === page ? 'page  page__current' : 'page'}
            key={p}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Pagination;
