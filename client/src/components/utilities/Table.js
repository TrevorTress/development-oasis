import { useEffect } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const TableComp = ({ className, tablesorter }) => {
	useEffect(() => {
		$('#myTable')
			.tablesorter({
				theme: 'ice',
				widgets: ['filter', 'zebra', 'cssStickyHeaders', 'pager'],
				widgetOptions: { cssStickyHeaders_attachTo: '.table-container', uitheme: 'jui' },
			})
			.tablesorterPager({
				// target the pager markup - see the HTML block below
				container: $('.pager'),

				// output string - default is '{page}/{totalPages}';
				// possible variables:
				// {page}, {totalPages}, {startRow}, {endRow} and {totalRows}
				output: '{page}/{totalPages} ({startRow}-{endRow})',

				// apply disabled classname to the pager arrows when the rows at
				// either extreme is visible - default is true
				updateArrows: true,

				// starting page of the pager (zero based index)
				page: 0,

				// Number of visible rows - default is 10
				size: 10,

				// if true, the table will remain the same height no matter how many
				// records are displayed. The space is made up by an empty
				// table row set to a height to compensate; default is false
				fixedHeight: true,

				// remove rows from the table to speed up the sort of large tables.
				// setting this to false, only hides the non-visible rows; needed
				// if you plan to add/remove rows with the pager enabled.
				removeRows: false,

				// css class names of pager arrows
				// next page arrow
				cssNext: '.next',
				// previous page arrow
				cssPrev: '.prev',
				// go to first page arrow
				cssFirst: '.first',
				// go to last page arrow
				cssLast: '.last',
				// select dropdown to allow choosing a page
				cssGoto: '.gotoPage',
				// location of where the "output" is displayed
				cssPageDisplay: '.pagedisplay',
				// dropdown that sets the "size" option
				cssPageSize: '.pagesize',
				// class added to arrows when at the extremes
				// (i.e. prev/first arrows are "disabled" when on the first page)
				// Note there is no period "." in front of this class name
				cssDisabled: 'disabled',
			});
	});
	let classes = { className };
	if (tablesorter) {
		classes += 'tablesorter';
	}

	return (
		<table id="myTable" class={classes} style={{ width: '50%' }}>
			<thead>
				<tr>
					<th>1</th>
					<th className="filter-select">2</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
			</tbody>
			<tfooter id="pager" className="pager">
				<form>
					<FaAngleDoubleLeft size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="first" alt="button" />
					<FaAngleLeft size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="prev" alt="button" />
					<input type="text" className="pagedisplay" alt="button" />
					<FaAngleRight size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="next" alt="button" />
					<FaAngleDoubleRight size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="last" alt="button" />
					<select className="pagesize">
						<option selected="selected" value="10">
							10
						</option>
						<option value="20">20</option>
						<option value="30">30</option>
					</select>
				</form>
			</tfooter>
		</table>
	);
};

const Table = styled(TableComp)``;

export default Table;
