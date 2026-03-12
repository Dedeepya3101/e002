package com.klef.fsad.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.fsad.exam.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

}