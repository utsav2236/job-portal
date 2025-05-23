import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
  return (
    <div className='px-10'>
        <Table>
            <TableCaption>A List Of Your Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Job Roll</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allAppliedJobs.length <= 0 ? <span className='font-bold text-gray-600'>you have not applied any job.</span> : allAppliedJobs.map((appliedJob)=> (
                        <TableRow key={appliedJob._id}>
                            <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                            <TableCell>{appliedJob?.job?.title}</TableCell>
                            <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                            <TableCell className='text-right'><Badge className={`${appliedJob?.status === "rejected" ? "bg-red-400" : appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable