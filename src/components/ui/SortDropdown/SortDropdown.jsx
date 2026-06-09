const SortDropdown = ({ setSortOrder, sortField }) => {
  return (
    <div>
      <select
        // value={sortOrder}
        defaultValue={`Sort By ${sortField}`}
        onChange={(e) => setSortOrder(e.target.value)}
        className="select w-48 outline-none text-[16px] bg-white border-[#E2E2E3]"
      >
        <option disabled={true}>{`Sort By ${sortField}`}</option>
        <option value="default">Default</option>
        <option value="asc">Low-High</option>
        <option value="desc">High-Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
