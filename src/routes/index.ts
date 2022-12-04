import { Router } from 'express';
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';

const router = Router();

router.get('/', pageController.home );

router.get('/dogs', pageController.dogs );
router.get('/dogs', pageController.cats );
router.get('/dogs', pageController.fishes );

router.get('/dogs', searchController.search );

export default router;