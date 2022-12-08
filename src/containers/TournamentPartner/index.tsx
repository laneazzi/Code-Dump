import { useMemo, useState } from 'react';

import { partnersFilters } from 'utils/filterItems';
import { partners } from 'utils/localBackend/partners';
import { Filter, PaginateWrapper, PartnerCard } from 'components';

import styles from './TournamentPartner.module.scss';

const TournamentPartner = () => {
  const partnerCards = useMemo(
    () =>
      partners.map((partner) => {
        return <PartnerCard key={partner.id} partner={partner} />;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [partners],
  );

  const [currentPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastIndex = currentPage * currentPerPage;

  const firstIndex = lastIndex - currentPerPage;

  const changePage = (page: number) => setCurrentPage(page);

  const filteredPartners = partnerCards.slice(firstIndex, lastIndex);
  return (
    <>
      <Filter filterItems={partnersFilters} withSearch />
      {filteredPartners.length <= 0 ? (
        <div className={styles.partners__empty}>No Tournaments added yet</div>
      ) : (
        <>
          <div className={styles.partners}>{filteredPartners}</div>
          {partners.length >= 6 && (
            <PaginateWrapper
              changePage={changePage}
              totalItemsCount={partners.length}
              itemsCountPerPage={currentPerPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default TournamentPartner;
