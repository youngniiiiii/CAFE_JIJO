import yyyymmddDate from "@/utils/yyyymmddDate"
import pb from "@/api/pocketbase"
import { Link } from "react-router-dom"

function NoticeList({ data, Collection, field }) {
  const handleUpViews = async (item) => {
    console.log(item)
    // const record = await pb.collection({Collection}).update(item.id, { noticeViews: item.noticeViews + 1 })
    const record = await pb.collection(`${field}`).update(item.id, { [`${field}Views`]: item[`${field}Views`] + 1 })

    console.log(record)
  }

  return (
    <>
      <table className="min-w-max w-full table-auto bg-white my-6 border-t">
        <thead>
          <tr className="text-jj_15 leading-normal">
            <th className="mobile:hidden py-3 px-6 items-center">번호</th>
            <th className="py-3 px-6 ">제목</th>
            <th className="mobile:hidden py-3 px-6 ">글쓴이</th>
            <th className="py-3 px-6 text-center">날짜</th>
            <th className="mobile:hidden py-3 px-6 ">조회</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light border-t">
          {data &&
            data.map((item, index) => {
              return (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 whitespace-nowrap text-center mobile:hidden">
                    <span className=" font-medium">{data.length - index}</span>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <Link to={`/bbs/${field}/detail/${item.id}`}>
                      <p
                        onClick={() => {
                          handleUpViews(item)
                        }}
                      >
                        {item[field + "Title"]}
                      </p>
                    </Link>
                  </td>
                  <td className="py-3 px-6 mobile:hidden text-center">
                    <p> {item[field + "Writer"]}</p>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <time>{yyyymmddDate(item.created)}</time>
                  </td>
                  <td className=" mobile:hidden py-3 px-6 text-center">
                    <span>{item[field + "Views"]}</span>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </>
  )
}

export default NoticeList
